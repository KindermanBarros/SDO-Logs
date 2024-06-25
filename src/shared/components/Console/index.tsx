import { useState, useEffect, useRef, SetStateAction } from 'react';
import { AppContainer } from './styles';
import { Commands } from '../../enums/commands.enum.ts';

const ConsoleApp = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ type: string; text: string }[]>(
    []
  );
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    (endOfMessagesRef.current as HTMLElement | null)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(scrollToBottom, [messages]);

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const command = input.trim() as Commands;
    if (!command) return;

    const knownCommands = Object.values(Commands);

    if (!knownCommands.includes(command)) {
      setMessages([{ type: 'error', text: 'Error: Unknown command' }]);
    } else if (command === Commands.Clear) {
      setMessages([]);
    } else {
      setMessages((messages) => [
        ...messages,
        { type: 'input', text: command },
      ]);
      const output = `You entered: ${command}`;
      setMessages((messages) => [
        ...messages,
        { type: 'output', text: output },
      ]);
    }

    setInput('');
  };

  return (
    <AppContainer>
      <div style={{ height: '50%', width: '100%', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{ color: msg.type === 'input' ? 'gray' : 'black' }}
          >
            {msg.text}
          </div>
        ))}
        <div ref={endOfMessagesRef} />
        <form onSubmit={handleSubmit}>
          <input
            style={{ flex: 1 }}
            size={100}
            type="text"
            value={input}
            onChange={handleInputChange}
            autoFocus
          />
        </form>
      </div>
    </AppContainer>
  );
};

export default ConsoleApp;
