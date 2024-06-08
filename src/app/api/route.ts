import axios from "axios";

const fetchData = async () => {
  const data = JSON.stringify({
    collection: "depositions",
    database: "faculdade-unica",
    dataSource: "pimenta",
  });

  const config = {
    method: "post",
    url: "https://sa-east-1.aws.data.mongodb-api.com/app/data-xeruirv/endpoint/data/v1/action/find",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
        "CKXz7APZdYtSSzQQeSppQRoUTb0XIPFUxw9DMlJGLPsn1Z7UISijtukgQNEhQcoq",
    },
    data: data,
  };

  try {
    const response = await axios(config);
    return { status: 200, data: response.data };
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return {
      status: error.response?.status || 500,
      message: "Failed to fetch data",
    };
  }
};

export async function GET(request: Request): Promise<Response> {
  const response = await fetchData();
  return new Response(JSON.stringify(response.data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
