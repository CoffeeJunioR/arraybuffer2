import ArrayBufferConverter from "../src";

function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }
  

  test('Проверка создания класса', () => {
    const converter = new ArrayBufferConverter();
    const expectedConverter = {
        buffer: null
    };
    expect(converter).toEqual(expectedConverter);
  });

  test('Проверка метода load', () => {
    const converter = new ArrayBufferConverter();
    converter.load(getBuffer())
    const buffer = new ArrayBuffer()
    expect(converter.buffer).toEqual(buffer);
  });

  test('Проверка метода toString', () => {
    const converter = new ArrayBufferConverter();
    converter.load(getBuffer())
    expect(converter.toString()).toBe('{\"data\":{\"user\":{\"id\":1,\"name\":\"Hitman\",\"level\":10}}}');
  })