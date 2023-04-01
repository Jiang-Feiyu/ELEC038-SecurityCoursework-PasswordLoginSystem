from flask import Flask, request, jsonify
from hashlib import sha256
from extensions import cors


def create_app(settings_override=None):
    app = Flask(__name__, instance_relative_config=True)

    app.config.from_object("config.settings")
    app.config.from_pyfile("settings.py", silent=True)

    if settings_override:
        app.config.update(settings_override)

    # Register extensions.
    cors.init_app(app)

    return app


application = create_app()


def generate_hash(text):
    return sha256(text.encode("utf-8")).hexdigest()


def test_hash(text, hash):
    text_hash = sha256(text.encode("utf-8")).hexdigest()
    return text_hash == hash


@application.route("/encryptions", methods=["POST"])
def encrypt_password():
    data = request.get_json()
    plain_password = data.get("plain_password")

    # Pass validation.
    if len(plain_password) < 8:
        return jsonify(
            code="password_required",
            message="Password requires minimum 8 characters."
        ), 400

    encrypted_password = generate_hash(plain_password)

    return jsonify(encrypted_password=encrypted_password), 201


@application.route("/encryptions/test", methods=["POST"])
def test_password_match():
    data = request.get_json()
    plain_password = data.get("plain_password")
    password_hash = data.get("password_hash")

    is_password_match = test_hash(plain_password, password_hash)

    return jsonify(password_match=is_password_match), 200


if __name__ == "__main__":
    application.run()
