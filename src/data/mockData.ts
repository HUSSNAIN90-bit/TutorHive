export interface Course {
  id: string;
  title: string;
  description: string;
  tutor: string;
  price: number;
  category: string;
  image: string;
  driveLink?: string;
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced React Development',
    description: 'Master React with hooks, context, and advanced patterns',
    tutor: 'Sarah Johnson',
    price: 99,
    category: 'Programming',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    id: '2',
    title: 'Data Science Fundamentals',
    description: 'Learn Python, statistics, and machine learning basics',
    tutor: 'Dr. Michael Chen',
    price: 149,
    category: 'Data Science',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    id: '3',
    title: 'Digital Marketing Strategy',
    description: 'Complete guide to modern digital marketing techniques',
    tutor: 'Emma Rodriguez',
    price: 79,
    category: 'Marketing',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    id: '4',
    title: 'UI/UX Design Principles',
    description: 'Create beautiful and functional user interfaces',
    tutor: 'Alex Thompson',
    price: 89,
    category: 'Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    id: '5',
    title: 'Financial Planning Basics',
    description: 'Learn personal finance and investment strategies',
    tutor: 'Robert Davis',
    price: 69,
    category: 'Finance',
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    id: '6',
    title: 'Creative Writing Workshop',
    description: 'Develop your writing skills and find your voice',
    tutor: 'Lisa Martinez',
    price: 59,
    category: 'Writing',
    image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    id: '7',
    title: 'Guitar Basics for Beginners',
    description: 'Learn to play guitar from scratch with easy-to-follow lessons',
    tutor: 'Mike Johnson',
    price: 45,
    category: 'Music & Arts',
    image: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    id: '8',
    title: 'Italian Cooking Masterclass',
    description: 'Master authentic Italian recipes and cooking techniques',
    tutor: 'Sophia Rossi',
    price: 65,
    category: 'Cooking & Baking',
    image: 'https://images.pexels.com/photos/6287519/pexels-photo-6287519.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    id: '9',
    title: 'Mindfulness and Meditation',
    description: 'Learn techniques for stress reduction and mental wellness',
    tutor: 'Dr. Amanda Lee',
    price: 35,
    category: 'Personal Development',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    id: '10',
    title: 'Digital Photography Basics',
    description: 'Capture stunning photos with your smartphone or camera',
    tutor: 'Carlos Mendoza',
    price: 55,
    category: 'Photography',
    image: 'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  }
];