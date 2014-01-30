from flask import Flask, render_template
import os
import binascii

app = Flask(__name__)

def random_id():
    return binascii.b2a_hex(os.urandom(8))

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)

