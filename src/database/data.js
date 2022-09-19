const user = {
  username: "Matilda_",
  pfp: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
};

//   For the Sidebar
const playlists = [
  {
    title: "Uptown Funk",
    link: "",
  },
  {
    title: "Gym Playlist",
    link: "",
  },
  {
    title: "Top Gaming Tracks",
    link: "",
  },
  {
    title: "Indie Tunes | Best Indie Hits",
    link: "",
  },
  {
    title: "This is Taylor Swift",
    link: "",
  },
  {
    title: "This is Arctic Monkeys",
    link: "",
  },
  {
    title: "Alps Radio",
    link: "",
  },
  {
    title: "This is BTS",
    link: "",
  },
  {
    title: "Love is a Laserquest",
    link: "",
  },
  {
    title: "Yeh Fitoor Mera",
    link: "",
  },
  {
    title: "Violin Covers",
    link: "",
  },
];

//   For the Rectangular Cards - 6 only
const topLists = [
  {
    title: "Liked Songs",
    image:
      "https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg",
    link: "",
  },
  {
    title: "This is Taylor Swift",
    image: "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
    link: "",
  },
  {
    title: "This is BTS",
    image: "https://i.scdn.co/image/ab67706f00000003a7aec3961666dee881cee250",
    link: "",
  },
  {
    title: "Ultimate Pop Gaming",
    image: "https://i.scdn.co/image/ab67706f000000038a24ebc68da6edc3eb998fcf",
    link: "",
  },
  {
    title: "Amit Trivedi Radio",
    image:
      "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
    link: "",
  },
  {
    title: "Morning Motivation",
    image: "https://i.scdn.co/image/ab67706f00000003037da32de996d7c859b3b563",
    link: "",
  },
];

// For different sections with Cards
const sections = [
  {
    category: "Your Top Mixes",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Amit Trivedi Radio",
        subtitle: "By Spotify",
        image:
          "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
        artist: false,
      },
      {
        title: "Adele",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
        artist: true,
      },
      {
        title: "reputation",
        subtitle: "Taylor Swift",
        image:
          "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "Made for You",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Amit Trivedi Radio",
        subtitle: "By Spotify",
        image:
          "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
        artist: false,
      },
      {
        title: "Adele",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
        artist: true,
      },
      {
        title: "reputation",
        subtitle: "Taylor Swift",
        image:
          "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "Recently Played",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Amit Trivedi Radio",
        subtitle: "By Spotify",
        image:
          "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
        artist: false,
      },
      {
        title: "Adele",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
        artist: true,
      },
      {
        title: "reputation",
        subtitle: "Taylor Swift",
        image:
          "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "Best of Artists",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Amit Trivedi Radio",
        subtitle: "By Spotify",
        image:
          "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
        artist: false,
      },
      {
        title: "Adele",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
        artist: true,
      },
      {
        title: "reputation",
        subtitle: "Taylor Swift",
        image:
          "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "Spotify original & exclusive shows",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Amit Trivedi Radio",
        subtitle: "By Spotify",
        image:
          "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
        artist: false,
      },
      {
        title: "Adele",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
        artist: true,
      },
      {
        title: "reputation",
        subtitle: "Taylor Swift",
        image:
          "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "Based on your recent listening",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Amit Trivedi Radio",
        subtitle: "By Spotify",
        image:
          "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
        artist: false,
      },
      {
        title: "Adele",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
        artist: true,
      },
      {
        title: "reputation",
        subtitle: "Taylor Swift",
        image:
          "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "India's Best",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Amit Trivedi Radio",
        subtitle: "By Spotify",
        image:
          "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
        artist: false,
      },
      {
        title: "Adele",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
        artist: true,
      },
      {
        title: "reputation",
        subtitle: "Taylor Swift",
        image:
          "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "Throwback",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Amit Trivedi Radio",
        subtitle: "By Spotify",
        image:
          "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
        artist: false,
      },
      {
        title: "Adele",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
        artist: true,
      },
      {
        title: "reputation",
        subtitle: "Taylor Swift",
        image:
          "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
];

export { user, playlists, topLists, sections };
