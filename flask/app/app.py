from graphviz import Digraph
from flask_cors import CORS, cross_origin
from flask import Flask, jsonify, request
import os
import sys

app = Flask(__name__)


@app.route("/testing", methods=["POST"])

def testing():
    shared_folder = '/shared'
    request_data = request.data.decode('utf-8')
    dot = Digraph(format='png')
    print(request_data)
    try:
        exec(request_data)
    except Exception as e:
        app.logger.error(e)
        return jsonify(message=str(e)), 400
    diagram_path = os.path.join(shared_folder, 'diagram')
    dot.render(diagram_path)
    return jsonify(message="OK"), 200


if __name__ == "__main__":
    # app.run(debug=True,host='0.0.0.0')
    app.run(host='0.0.0.0', port=5000)
