export function sleep(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
}

// Simulate API latency + occasional failure
export async function simulateRequest<T>(
    dataFactory: () => T,
    options?: { forceFail?: boolean; failureRate?: number; errorMessage?: string }
): Promise<T> {
    await sleep(600 + Math.random() * 700); // 600–1300ms

    if (options?.forceFail) {
        throw new Error(options?.errorMessage ?? "Network error (forced for demo)");
    }

    const failureRate = options?.failureRate ?? 0.15;
    const shouldFail = Math.random() < failureRate;
    if (shouldFail) {
        throw new Error(options?.errorMessage ?? "Network error (simulated)");
    }

    return dataFactory();
}

