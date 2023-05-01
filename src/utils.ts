const { log, error } = console;
export const logger = {
  log,
  error,
};

export function isEmail(input: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(input);
}

export function extractIp(text: string): string {
  return /(?:[0-9]{1,3}\.){3}[0-9]{1,3}/.exec(text)?.[0] ?? '';
}
