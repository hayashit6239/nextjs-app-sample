"use client";

import { useEffect } from "react";
import { Text } from "@mantine/core";

export default function Error({ error }: { error: string }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <Text className="text-red-500">Something went wrong!</Text>
            {/* <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button> */}
        </div>
    );
}
