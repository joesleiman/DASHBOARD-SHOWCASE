import { simulateRequest } from "./helpers";

// ==================== TYPES ====================
export type ApiLatencyResponse = {
    apiLatencyMs: number;
    timestamp: string;
};

export type ErrorRateResponse = {
    errorRate: number;
    timestamp: string;
};

// ==================== API FUNCTIONS ====================
export function fetchApiLatency(): Promise<ApiLatencyResponse> {
    return simulateRequest(() => ({
        apiLatencyMs: Math.floor(80 + Math.random() * 220),
        timestamp: new Date().toISOString(),
    }));
}

export function fetchErrorRate(): Promise<ErrorRateResponse> {
    return simulateRequest(() => ({
        errorRate: Number((Math.random() * 0.08).toFixed(3)),
        timestamp: new Date().toISOString(),
    }));
}
