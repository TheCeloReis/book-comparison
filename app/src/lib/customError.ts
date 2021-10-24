class CustomError extends Error {
  constructor(message = "bar") {
    super(message);
  }
}

export default CustomError;
