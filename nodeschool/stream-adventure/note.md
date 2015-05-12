在做练习之间, 先读一下: https://github.com/jabez128/stream-handbook

pipe 会保证顺序么, 例如读取一个文件, 传到下一个 pipe 中时, 行与行之间的顺序能保证么? 参见 #5

#6 太模糊, concat 之后还能继续 pipe 么


好用的库

request 发起 http 请求, 返回一个可写+可读的 stream

through2 简化 transform stream, 对 stream 进行处理

split


#10 完全没搞懂
trumpet 的用法



There is a very handy module you can use here: duplexer. The duplexer module
exports a single function `duplexer(writable, readable)` that joins together a
writable stream and readable stream into a single, readable/writable duplex
stream.

spwan 的用法