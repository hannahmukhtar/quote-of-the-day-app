# -*- coding: utf-8 -*-
from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # Enable CORS

quotes = [
    "The best way to predict the future is to invent it. – Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "If you can dream it, you can achieve it. – Zig Ziglar",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Men never have to think about flowers. - Hannah Mukhtar"
]

@app.route('/api/quote', methods=['GET'])
def get_quote():
    return jsonify({"quote": random.choice(quotes)})

if __name__ == '__main__':
    app.run(debug=True)
