FROM node:19.7-bullseye-slim

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ADD . /
ENV PATH="/root/.cargo/bin:${PATH}"
RUN make install-rust-deps
RUN npm install
RUN npm run build
