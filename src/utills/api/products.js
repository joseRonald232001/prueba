import { requestWithoutPermission } from "./axios";

const getProductsByCategory = async (category) => {
  try {
    const res = await requestWithoutPermission.get(`/productos/categoria?category=${category}`);
    return res.data
  } catch (error) {
    console.error("Error fetching all products:", error);

    return { success: false, message: "Error fetching all products" };
  }
};

export default getProductsByCategory;
