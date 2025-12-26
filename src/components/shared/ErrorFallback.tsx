interface ErrorFallbackProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorFallback({ message, onRetry }: ErrorFallbackProps) {
  return (
    <div className="rounded-lg border p-4 bg-red-50">
      <p className="font-medium text-red-700">Failed to load</p>
      <p className="text-sm text-red-600">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-3 rounded-lg bg-red-700 px-3 py-1.5 text-sm text-white hover:bg-red-800"
        >
          Retry
        </button>
      )}
    </div>
  );
}
