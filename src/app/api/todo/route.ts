import ToDo from "@/Models/ToDo";
export async function GET(request: Request) {
  const result = await ToDo.find();
  return Response.json(result);
}

export async function POST(request: Request) {
  const result = await ToDo.create(request.body);

  return Response.json(result);
}
