const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <p className="text-lg text-gray-700">Here are some of my projects.</p>
      <div className="mt-8">
        <ul className="list-disc list-inside">
          <li className="mb-2">Project 1: Description of project 1.</li>
          <li className="mb-2">Project 2: Description of project 2.</li>
          <li>Project 3: Description of project 3.</li>
        </ul>
      </div>
    </div>
  );
};
export default Projects;
