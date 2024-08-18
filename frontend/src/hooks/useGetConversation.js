import { useState, useEffect } from 'react';

const useGetConversations = () => {
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      console.log("Starting request to fetch conversations...");
      try {
        const response = await fetch('http://localhost:5000/api/users')
        const data = await response.json();

        // Check if the response is an array or an object with users array
        if (Array.isArray(data)) {
          setConversations(data);
        } else if (data && Array.isArray(data.users)) {
          setConversations(data.users);
        }

      } catch (error) {
        console.error('Failed to fetch conversations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
