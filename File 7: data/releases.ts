export type Release = {
  id: number;
  title: string;
  album: string;
  category: string;
  thumbnail: string;
  description: string;
  youtubeUrl: string;
  musicUrl: string;
  tags: string[];
  mood: string;
  duration: string;
  featured: boolean;
};

export const releases: Release[] = [
  { id: 1, title: "Mere Pita Bholenath Ji", album: "Mere Pita Bholenath Ji", category: "Devotional Cinematic", thumbnail: "https://picsum.photos/id/1015/600/400", description: "Divine cinematic journey where sacred sound meets epic orchestration.", youtubeUrl: "https://www.youtube.com/channel/UCUIbQKh-7ZHjqRF9dJwzdlw", musicUrl: "#", tags: ["Shivayonic"], mood: "Divine", duration: "4:28", featured: true },
  { id: 2, title: "Shiv Chalisa", album: "Shiv Chalisa Shivayonic Genre", category: "Shivayonic", thumbnail: "https://picsum.photos/id/102/600/400", description: "Sacred verses reborn in futuristic sonic architecture.", youtubeUrl: "https://www.youtube.com/channel/UCUIbQKh-7ZHjqRF9dJwzdlw", musicUrl: "#", tags: ["Shivayonic"], mood: "Powerful", duration: "5:12", featured: true },
  { id: 3, title: "Mahakal Alaap", album: "Mahakal Alaap Shivayonic Genre", category: "Shivayonic", thumbnail: "https://picsum.photos/id/201/600/400", description: "Deep meditative sonic journey into the realm of Mahakal.", youtubeUrl: "https://www.youtube.com/channel/UCUIbQKh-7ZHjqRF9dJwzdlw", musicUrl: "#", tags: ["Shivayonic"], mood: "Meditative", duration: "6:45", featured: true },
  { id: 4, title: "Asht Jyotirlinga", album: "Asht Jyotirlinga Shivayonic Genre", category: "Shivayonic", thumbnail: "https://picsum.photos/id/29/600/400", description: "Eight divine pillars of light in sonic form.", youtubeUrl: "https://www.youtube.com/channel/UCUIbQKh-7ZHjqRF9dJwzdlw", musicUrl: "#", tags: ["Shivayonic"], mood: "Sacred", duration: "7:10", featured: true },
  { id: 5, title: "Bholenath Productions Anthem", album: "Bholenath Productions Anthem", category: "Anthem", thumbnail: "https://picsum.photos/id/30/600/400", description: "The official sonic signature of divine creativity.", youtubeUrl: "https://www.youtube.com/channel/UCUIbQKh-7ZHjqRF9dJwzdlw", musicUrl: "#", tags: ["Anthem"], mood: "Epic", duration: "3:55", featured: true }
];
