import { updateBlock } from "@/app/actions";
import { CodeEditor } from "@/components/CodeEditor";
import { db } from "@/db";

export default async function EditPage({ params }: any) {
  const block = await db.block.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return (
    <form action={updateBlock}>
      <h3 className="font-bold m-3">Edit a Block</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="title"
            id="title"
            defaultValue={block?.title}
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <CodeEditor existingCode={block?.code} />
          {/* <textarea defaultValue={block?.code}></textarea> */}
        </div>
        <input type="hidden" name="id" value={block?.id} />
        <button
          className="rounded p-2 bg-red-600 hover:bg-red-700 text-white"
          type="submit"
        >
          Update
        </button>
      </div>
    </form>
  );
}
