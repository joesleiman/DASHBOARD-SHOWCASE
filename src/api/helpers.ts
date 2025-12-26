export function sleep(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
}

// Simulate API latency + occasional failure
export async function simulateRequest<T>(dataFactory: () => T): Promise<T> {
    await sleep(600 + Math.random() * 700); // 600-1300ms
    const shouldFail = Math.random() < 0.15; // 15% fail rate
    if (shouldFail) throw new Error("Network error (simulated)");
    return dataFactory();
}
