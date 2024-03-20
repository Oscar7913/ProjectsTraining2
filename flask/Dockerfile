FROM python:3.12.2-slim-bullseye

RUN apt-get update \
  && apt-get install -y --no-install-recommends graphviz \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /srv

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt \
  && pip install --upgrade pip \
  && pip install flask

COPY ./app /srv

ENV FLASK_APP=app

CMD ["python", "app.py"]