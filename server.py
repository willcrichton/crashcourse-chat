from flask import *
import os
import binascii

app = Flask(__name__)
    
@app.route('/')
def index():
    return render_template('index.html', room_id='')

@app.route('/new')
def new():    
    return redirect(binascii.b2a_hex(os.urandom(8)))

@app.route('/<roomid>')
def room(roomid):
    return render_template('chat.html', room_id=roomid)

if __name__ == "__main__":
    port = int(os.environ.get('PORT',5000))
    app.run(host='0.0.0.0', port=port, debug=True)

