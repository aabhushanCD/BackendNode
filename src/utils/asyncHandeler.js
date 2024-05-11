// const asyncHandeler = () => {};

// export { asyncHandeler };

const asyncHandeler = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    req.status(error.code || 400).json({
      success: false,
      message: error.message,
    });
  }
};

export { asyncHandeler };
