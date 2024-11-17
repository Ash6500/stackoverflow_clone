import LeftSidebar from "./LeftSidebar"
import RightSidebar from "./RightSidebar";

const MainContent = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Bar */}
      <LeftSidebar/>

      {/* Main Content */}
      <div className="flex-1 bg-white p-6 border-b">
        <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
        <p>
          This is the main content area. It takes up the most space and serves as the focal
          point of the page.
        </p>
      </div>

      {/* Right Bar */}
      <RightSidebar/>
    </div>
  );
};

export default MainContent;