export async function responseUser(email, password) {
  try {
    console.log("antes");

    const response = await fetch("https://maratune.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log("despues");

    return response;
  } catch (error) {
    console.log(Error, "error");
  }
}

export async function registerUser(
  role,
  name,
  lastname,
  email,
  phone_number,
  password,
  nit,
  city,
) {
  try {
    const response = await fetch("https://maratune.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role,
        name,
        lastname,
        email,
        phone_number,
        password,
        nit,
        city,
      }),
    });
    console.log("Status:", response.status);
    if (!response.ok) {
      throw new Error("Could not create user");
    }
    const data = await response.json();
    console.log("Respuesta del backend:", data);
    return data;
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}
