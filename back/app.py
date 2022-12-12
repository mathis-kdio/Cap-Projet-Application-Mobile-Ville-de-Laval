from flask import Flask,jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from decouple import config
#test = config('BDD_NAME')

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = f'{config("BDD_CONNECTOR")}://{config("BDD_USERNAME")}:{config("BDD_PASSWORD")}@{config("BDD_HOSTNAME")}:{config("BDD_PORT")}/{config("BDD_NAME")}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Friend(db.Model):
    id = db.Column("id", db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    picture = db.Column(db.String(100))

    def __init__(self, name, picture):
        self.name = name
        self.picture = picture


class FriendSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'picture')


friend_schema = FriendSchema()
friends_schema = FriendSchema(many=True)

@app.route('/get', methods = ['GET'])
def get_friends():
    all_friends = Friend.query.all()
    results = friends_schema.dump(all_friends)
    return jsonify(results)

@app.route('/get/<id>/', methods = ['GET'])
def get_friend(id):
    results = Friend.query.get(id)
    return friend_schema.jsonify(results)

@app.route('/add', methods = ['POST'])
def add_friends():
    name = request.json['name']
    picture = request.json['picture']

    friend = Friend(name, picture)
    db.session.add(friend)
    db.session.commit()
    return friend_schema.jsonify(friend)

@app.route('/update/<id>/', methods = ['PUT'])
def update_friend(id):
    friend = Friend.query.get(id)

    name = request.json['name']
    picture = request.json['picture']

    friend.name = name
    friend.picture = picture

    db.session.commit()
    return friend_schema.jsonify(friend)

@app.route('/delete/<id>/', methods = ['DELETE'])
def delete_friend(id):
    friend = Friend.query.get(id)
    db.session.delete(friend)
    db.session.commit()
    return friend_schema.jsonify(friend)

@app.route('/image', methods = ['GET'])
def get_image():
    return jsonify({"ok": "ok"})

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        app.run(host='0.0.0.0', port=config('APP_PORT'), debug=False)
