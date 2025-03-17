import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [announcement, setAnnouncement] = useState({ title: '', description: '' });
  const [media, setMedia] = useState({ title: '', description: '', file: null });
  const [audio, setAudio] = useState({ title: '', description: '', file: null });

  const handleAnnouncementSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://student-backend-6rm6.onrender.com/api/announcements', announcement);
    setAnnouncement({ title: '', description: '' });
  };

  const handleMediaSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', media.title);
    formData.append('description', media.description);
    formData.append('file', media.file);
    await axios.post('https://student-backend-6rm6.onrender.com/api/media', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    setMedia({ title: '', description: '', file: null });
  };

  const handleAudioSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', audio.title);
    formData.append('description', audio.description);
    formData.append('file', audio.file);
    await axios.post('https://student-backend-6rm6.onrender.com/api/audio', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    setAudio({ title: '', description: '', file: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Admin Dashboard</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Announcement Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Create Announcement</h2>
          <form onSubmit={handleAnnouncementSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Announcement Title"
              value={announcement.title}
              onChange={(e) => setAnnouncement({ ...announcement, title: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Description"
              value={announcement.description}
              onChange={(e) => setAnnouncement({ ...announcement, description: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Submit Announcement
            </button>
          </form>
        </div>

        {/* Media Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Upload Media</h2>
          <form onSubmit={handleMediaSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Media Title"
              value={media.title}
              onChange={(e) => setMedia({ ...media, title: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Description"
              value={media.description}
              onChange={(e) => setMedia({ ...media, description: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="file"
              onChange={(e) => setMedia({ ...media, file: e.target.files[0] })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
            >
              Upload Media
            </button>
          </form>
        </div>

        {/* Audio Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Upload Audio</h2>
          <form onSubmit={handleAudioSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Audio Title"
              value={audio.title}
              onChange={(e) => setAudio({ ...audio, title: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Description"
              value={audio.description}
              onChange={(e) => setAudio({ ...audio, description: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="file"
              onChange={(e) => setAudio({ ...audio, file: e.target.files[0] })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              Upload Audio
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;