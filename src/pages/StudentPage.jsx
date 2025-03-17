import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [media, setMedia] = useState([]);
  const [audio, setAudio] = useState([]);

  useEffect(() => {
    axios.get('https://student-backend-6rm6.onrender.com/api/announcements')
      .then(response => setAnnouncements(response.data))
      .catch(error => console.error(error));

    axios.get('https://student-backend-6rm6.onrender.com/api/media')
      .then(response => setMedia(response.data))
      .catch(error => console.error(error));

    axios.get('https://student-backend-6rm6.onrender.com/api/audio')
      .then(response => setAudio(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Student Portal</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Announcements Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Announcements</h2>
          {announcements.map((announcement, index) => (
            <div key={index} className="p-4 mb-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-xl font-bold text-blue-700">{announcement.title}</h3>
              <p className="text-gray-600">{announcement.description}</p>
            </div>
          ))}
        </div>

        {/* Media Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Media</h2>
          {media.map((item, index) => (
            <div key={index} className="p-4 mb-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-xl font-bold text-blue-700">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              {item.fileUrl && (
                <img
                  src={`https://student-backend-6rm6.onrender.com/${item.fileUrl}`}
                  alt="Media"
                  className="mt-2 h-96 rounded-lg shadow-sm"
                />
              )}
            </div>
          ))}
        </div>

        {/* Audio Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Audio</h2>
          {audio.map((item, index) => (
            <div key={index} className="p-4 mb-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-xl font-bold text-blue-700">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              {item.fileUrl && (
                <audio controls className="mt-2 w-full">
                  <source src={`https://student-backend-6rm6.onrender.com/${item.fileUrl}`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentPage;