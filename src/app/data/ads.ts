export interface Ad {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  likes: number;
  views: number | string;
  time: string;
  type: string;
  contact?: string;
  location?: string;
  images?: string[];
}

export const adData: Ad[] = [
  {
    id: 1,
    title: "Service for girls and aunties",
    description: "I am a educated boy from colombo Doing service around colombo Age 25 Call or WhatsApp for more info Connect with me...",
    fullDescription: "I am a educated boy from colombo Doing service around colombo Age 25. I provide professional and respectful service. Call or WhatsApp for more info. Connect with me for a great experience. Available 24/7 for your convenience.",
    likes: 1,
    views: 430,
    time: "2m ago",
    type: "VIP Ad",
    contact: "+94 71 234 5678",
    location: "Colombo",
    images: []
  },
  {
    id: 2,
    title: "👸Girls and Aunty's 👸 Home and...",
    description: "💝Girls only Secret relationship & Full service💝 (no boys gay service) looking for a good relationship with girlfriend. Hi I'm...",
    fullDescription: "💝Girls only Secret relationship & Full service💝 (no boys gay service) looking for a good relationship with girlfriend. Hi I'm Saman, 28 years old, educated and well-mannered. I provide discreet and professional service. Available for home visits or at my place.",
    likes: 0,
    views: 224,
    time: "2m ago",
    type: "VIP Ad",
    contact: "+94 77 345 6789",
    location: "Nugegoda",
    images: []
  },
  {
    id: 3,
    title: "❤ Maharagama, Pannipitiya FULL...",
    description: "❤ Maharagama, Pannipitiya FULL SERVICE 4500/= 👸% My real picture 👸 I'm Nilushi 👸 27 years 👸 Hot & Young Girl 👸 🌹...",
    fullDescription: "❤ Maharagama, Pannipitiya FULL SERVICE 4500/= 👸% My real picture 👸 I'm Nilushi 👸 27 years 👸 Hot & Young Girl 👸 🌹 Available now 🌹 Call me for booking 🌹 100% satisfaction guaranteed 🌹 Clean and safe place 🌹 Full body massage available",
    likes: 0,
    views: 22,
    time: "6m ago",
    type: "Super Ad",
    contact: "+94 76 456 7890",
    location: "Maharagama, Pannipitiya",
    images: []
  },
  {
    id: 4,
    title: "Genuine Hot Hot cam show 💘 💝",
    description: "👑 Hi©GENTLEMAN☺ 🌹 6 mins 1000/= fingering full body open show Im young student my name is Mathu age is 22 years...",
    fullDescription: "👑 Hi©GENTLEMAN☺ 🌹 6 mins 1000/= fingering full body open show Im young student my name is Mathu age is 22 years. I provide high-quality cam shows with full satisfaction guaranteed. Various packages available. Payment methods: eZ Cash, mCash, FriMi, or bank transfer.",
    likes: 50,
    views: "57.0K",
    time: "16m ago",
    type: "Cash Track Guaranteed",
    contact: "+94 75 567 8901",
    location: "Online",
    images: []
  }
]; 