import React from "react";

export const dynamic = "force-static";

function DocsPage() {
  return (
    <section>
      <div className="container mx-auto min-h-[calc(100vh-120px)]">
        <h1 className=" text-lg md:text-xl font-medium">Description</h1>
        <p className=" mt-3 flex flex-col gap-2">
          <span className=" text-gray-500">
            {`Destiny and love are like two best friends who sometimes surprise
            us. Destiny is like a map of our life's journey that we can't
            change. Love, on the other hand, is a strong feeling that can change
            the way we follow that map.`}
          </span>
          <span className=" text-gray-500">
            {`Imagine you meet someone special by chance, and you fall in love.
            That's destiny and love working together. Love can make us do things
            we never expected. It can take us on adventures we never planned.`}
          </span>
          <span className=" text-gray-500">
            So, destiny sets the path, and love adds exciting twists and turns
            to our journey. They are like the perfect team, shaping our lives in
            surprising and wonderful ways.
          </span>
        </p>
      </div>
    </section>
  );
}

export default DocsPage;
