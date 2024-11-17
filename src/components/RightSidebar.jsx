import { Pencil } from 'lucide-react';

const RightSidebar = () => {
  const hotMetaPosts = [
    {
      score: 8,
      title: 'Tags [driver] and [device-driver] appear to be redundant'
    },
    {
      score: 27,
      title: 'How to handle dupes where A is closed as dup of B but I have an answer that...'
    },
    {
      score: 27,
      title: 'Ambiguous tag [containers]'
    }
  ];

  return (
    <aside className="w-64 bg-white p-6 space-y-8">
      {/* Blog Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">The Overflow Blog</h2>
        <ul className="space-y-3">
          <li className="flex gap-2">
            <Pencil className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
            <span className="text-sm text-gray-700">The unexpected benefits of mentoring others</span>
          </li>
          <li className="flex gap-2">
            <Pencil className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
            <span className="text-sm text-gray-700">Podcast 354: Building for AR with Niantic Labs&apos; augmented reality SDK</span>
          </li>
        </ul>
      </section>

      {/* Featured Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Featured & meta</h2>
        <ul className="space-y-3">
          <li className="flex gap-2">
            <span className="text-sm text-gray-700">Beta release of Collective&trade; on Stack Overflow</span>
          </li>
        </ul>
      </section>

      {/* Hot Meta Posts */}
      <section>
        <h2 className="text-xl font-bold mb-4">Hot meta post</h2>
        <ul className="space-y-3">
          {hotMetaPosts.map((post, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-sm text-gray-500 w-6">{post.score}</span>
              <span className="text-sm text-gray-700">{post.title}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Custom Filter */}
      <section>
        <h2 className="text-xl font-bold mb-4">Custom filter</h2>
        <button className="text-sm text-blue-500 hover:text-blue-600 border-2 border-gray-300 p-2">
          add custom filters
        </button>
      </section>
    </aside>
  );
};

export default RightSidebar;