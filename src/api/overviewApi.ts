import { simulateRequest } from "./helpers";

// ==================== TYPES ====================
export type ActiveUsersResponse = {
    activeUsers: number;
    timestamp: string;
};

export type SignupsResponse = {
    signupsToday: number;
    timestamp: string;
};

export type RevenueResponse = {
    revenueToday: number;
    timestamp: string;
};

// ==================== API FUNCTIONS ====================
export function fetchActiveUsers(): Promise<ActiveUsersResponse> {
    return simulateRequest(() => ({
        activeUsers: Math.floor(1000 + Math.random() * 9000),
        timestamp: new Date().toISOString(),
    }));
}

export function fetchSignupsToday(): Promise<SignupsResponse> {
    return simulateRequest(() => ({
        signupsToday: Math.floor(10 + Math.random() * 140),
        timestamp: new Date().toISOString(),
    }));
}

export function fetchRevenueToday(): Promise<RevenueResponse> {
    return simulateRequest(() => ({
        revenueToday: Math.floor(500 + Math.random() * 5000),
        timestamp: new Date().toISOString(),
    }));
}

export function fetchAlwaysFailingMetric(): Promise<unknown> {
    return simulateRequest(
        () => ({}),
        { forceFail: true, errorMessage: "Demo error: this widget is designed to fail." }
    );
}