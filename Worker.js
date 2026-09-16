export default {
  async fetch(request) {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }

    if (request.method === "GET") {
      return new Response(
        JSON.stringify({
          status: "OK",
          sklep: "SKARPETKISMP",
          message: "API działa!"
        }),
        {
          headers: {
            "Content-Type": "application/json",
            ...cors
          }
        }
      );
    }

    if (request.method === "POST") {
      const data = await request.json();

      return new Response(
        JSON.stringify({
          success: true,
          message: "Zamówienie odebrane",
          nickname: data.nickname,
          product: data.product
        }),
        {
          headers: {
            "Content-Type": "application/json",
            ...cors
          }
        }
      );
    }

    return new Response("Method not allowed", {
      status: 405,
      headers: cors
    });
  }
};
