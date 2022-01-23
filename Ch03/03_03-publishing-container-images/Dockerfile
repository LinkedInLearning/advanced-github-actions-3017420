FROM python:3-alpine
LABEL org.opencontainers.image.source=https://github.com/console6500/github-container-registry-demo

RUN apk add --update \
        bash \
        coreutils \
        curl \
        vim

COPY simple.py /usr/local/bin
RUN chmod +x /usr/local/bin/simple.py

ENTRYPOINT ["/usr/local/bin/simple.py"]
CMD ["/bin/bash"]
