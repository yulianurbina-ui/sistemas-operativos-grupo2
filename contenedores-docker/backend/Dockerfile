FROM rockylinux:9

RUN dnf install -y python3 \
    && dnf clean all
COPY app.py /app/app.py
EXPOSE 5000
CMD ["python3", "/app/app.py"]
