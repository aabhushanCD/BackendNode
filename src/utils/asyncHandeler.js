// const asyncHandeler = () => {};

// export { asyncHandeler };

const asyncHandeler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    req.status(error.code || 400).json({
      success: false,
      message: error.message,
    });
  }
};

export { asyncHandeler };
