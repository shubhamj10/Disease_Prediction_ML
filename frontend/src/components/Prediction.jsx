import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Recommend from './recommend/Recommend';
import sendIcon from './img/send-icon.png';

function Prediction() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [typingMessage, setTypingMessage] = useState('');
  const defaultMessage = 'Please describe how you are feeling and what are your symptoms.';
  const navigate = useNavigate();

  useEffect(() => {
    const typingEffect = async () => {
      for (let i = 0; i <= defaultMessage.length; i++) {
        setTypingMessage(defaultMessage.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      setMessages([{ text: defaultMessage, sender: 'bot' }]);
    };

    typingEffect();
  }, []);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async () => {
    if (!query) return;

    setError(null);
    setLoading(true);
    const userMessage = { text: query, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post('http://192.168.58.142:3000/api/symptoms', { query });
      if (response.data && Array.isArray(response.data.symptoms)) {
        const symptoms = response.data.symptoms.join(', ');
        const botMessage = { text: `Symptoms extracted from your description are: ${symptoms}.`, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        setError('Unexpected response structure');
      }
    } catch (error) {
      setError(error.response?.data?.error || 'Something went wrong. Please try again.');
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Something went wrong. Please try again.', sender: 'bot' }
      ]);
    } finally {
      setLoading(false);
      setQuery('');
    }
  };

  const handleKnowMore = () => {
    navigate('/Recommend');
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-[#D6EFD8] to-[#f0f0f0] h-screen flex flex-col">
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="chat-history flex-grow overflow-y-auto mb-4 p-3 border border-gray-300 rounded-lg bg-[#F5F7F8] max-h-[600px]">
        {messages.map((message, index) => (
          <p key={index} className={message.sender === 'user' ? 'text-right text-blue-500 text-lg my-1' : 'text-left text-gray-800 text-lg my-1'}>
            {message.text}
          </p>
        ))}
        {loading && <p className="text-left text-lg text-gray-800">Thinking...</p>}
        {typingMessage && !messages.length && <p className="text-left text-gray-500">{typingMessage}</p>}
      </div>
      <div className="textarea-container flex items-center mt-auto">
        <button className="know-more-button bg-blue-500 text-white px-4 py-2 rounded-lg mr-2" onClick={handleKnowMore}>
          Know More
        </button>
        <textarea
          className="flex-grow p-2 border border-gray-300 rounded-lg resize-none mr-2 text-lg bg-[#F5F7F8]"
          value={query}
          onChange={handleQueryChange}
          placeholder="Enter symptoms here..."
          rows={3}
        />
        <button onClick={handleSubmit} disabled={loading}>
          <img src={sendIcon} alt="send" className="w-10 h-10 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default Prediction;
