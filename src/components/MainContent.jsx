import LeftSidebar from "./LeftSidebar"

const MainContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-screen">
      {/* Left Sidebar */}
      <div className="lg:col-span-3 p-4 bg-gray-200">
        <LeftSidebar/>
      </div>

      {/* content */}
      <div className="lg:col-span-6 p-4">
        Main content
      </div>

      {/* Right Sidebar */}
      <div className="lg:col-span-3 p-4 bg-gray-200">
        Right sidebar
      </div>
    </div>
  )
}

export default MainContent