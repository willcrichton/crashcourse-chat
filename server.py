from flask import Flask, render_template, redirect
import os
import binascii

app = Flask(__name__)

def random_id():
    return binascii.b2a_hex(os.urandom(8))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/new')
def new():
    room_id = random_id()
    return redirect('/%s' % room_id)

@app.route('/<room_id>')
def chat(room_id):
    return render_template('chat.html', room_id=room_id)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)

