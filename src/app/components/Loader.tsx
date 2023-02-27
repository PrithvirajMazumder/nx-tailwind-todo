export const Loader = ({ isLoading }: { isLoading: boolean }) => {
  return isLoading ? (
    <progress className="progress progress-primary w-full"></progress>
  ) : null;
};
