export const sendEmail = async (
  formData
) => {
  try {
    console.log(
      "Email payload:",
      formData
    );

    return {
      success: true
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
};