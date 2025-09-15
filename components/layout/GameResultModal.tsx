import Button from '@/components/ui/Button';
import { SquareValue } from '@/types/game';

interface GameResultModalProps {
  isOpen: boolean;
  winner: SquareValue;
  onPlayAgain: () => void;
  onClose: () => void;
}

const GameResultModal: React.FC<GameResultModalProps> = ({ isOpen, winner, onPlayAgain, onClose }) => {
  if (!isOpen) return null;

  const getMessage = () => {
    if (winner === 'X') return 'Player X Wins!';
    if (winner === 'O') return 'Player O Wins!';
    return 'It\'s a Draw!';
  };

  const getColor = () => {
    if (winner === 'X') return 'text-green-600';
    if (winner === 'O') return 'text-orange-600';
    return 'text-black';
  };

  const getColorHex = () => {
    if (winner === 'X') return '#0C6E5F';
    else if (winner === 'O') return '#C84504';
    else return '#35382E'
  }

  const getBGColorHex = () => {
    if (winner === 'X') return '#DAFBF6';
    else if (winner === 'O') return '#FEE4D7';
    else return "#E2E4DD"
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative text-slate-900 rounded-2xl p-8 lg:p-15 max-w-lg w-5/6 lg:w-full shadow-2xl transform transition-all duration-200 ease-out" style={{
        backgroundColor: getBGColorHex()
      }}>
        <div className="text-center">
          <h2 className={`text-5xl md:text-6xl font-extrabold mb-4 ${getColor()}`}>
            {getMessage()}
          </h2>

          <div className="flex justify-center gap-4 mt-6">
            <Button onClick={onPlayAgain} label="Play Again" bgColor={getColorHex()} />
            <Button onClick={onClose} label="Close" bgColor={getColorHex()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameResultModal;
