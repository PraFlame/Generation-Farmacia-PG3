interface BotaoProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export function Botao({ children, onClick }: BotaoProps) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}