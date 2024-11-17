import {Home, Globe, Star, Briefcase, Users} from 'lucide-react'

const LeftSidebar = () => {

  const menuSections = [
    {
      type: 'section',
      title: '',
      items: [
        { label: 'Home', isActive: true, indent: true }
      ]
    },
    {
      type: 'section',
      title: 'Public',
      icon: <Globe className="w-4 h-4" />,
      items: [
        { label: 'Questions' },
        { label: 'Tags' },
        { label: 'Users' },
        { label: 'Companies' }
      ]
    },
    {
      type: 'section',
      title: 'Collectives',
      icon: <Star className="w-4 h-4" />,
      items: [
        { label: 'Explore Collectives' }
      ]
    },

    {
      type:'section',
      title: 'Find Jobs',
      icon: <Briefcase className='w-4 h-4'/>,
      items: [
        { label: 'Jobs'},
        { label: 'Companies'}
      ]
    },
    {
      type: 'section',
      title: 'Teams',
      icon: <Users className='w-4 h-4'/>,
      items: [
        {label: '+Create Team'},
      ]
    },
  ];

  return (
    <nav className="w-48 h-screen bg-white pt-4 left-0 top-0">
      {menuSections.map((section, sectionIdx) => (
      <div key={sectionIdx} className="mt-4 first:mt-0">
        {section.type === 'home' ? (
          <div className="px-2">
            <a href="#" className="flex items-center px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-md">
              <Home className="w-4 h-4 mr-1" />
              <span className="text-sm">Home</span>
            </a>
          </div>
        ) : (
          <>
            <div className="px-4 mb-2 flex items-center">
              {section.icon}
              <span className="text-xs font-semibold text-gray-500 uppercase ml-2">
                {section.title}
              </span>
            </div>
            
            <div className="space-y-1">
              {section.items.map((item, itemIdx) => (
                <a
                  key={itemIdx}
                  href="#"
                  className={`flex items-center px-6 py-2 text-sm group ${
                    item.indent ? 'pl-8' : 'pl-6'
                  } ${
                    item.isActive
                      ? 'bg-gray-100 text-black font-medium border-r-2 border-orange-400'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    ))}
  </nav>
  )
}

export default LeftSidebar