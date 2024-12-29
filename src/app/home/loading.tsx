import { Flex, Text } from "@mantine/core";

export default function Loading() {
    return (
        <Flex direction="column" className="w-full items-center justify-center pt-5">
            <Text className="text-2xl font-bold">Loading...</Text>
            <Text className="text-2xl font-bold">Backend Running For 3seconds</Text>
        </Flex>
    );
}
