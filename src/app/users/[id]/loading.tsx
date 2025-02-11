import { Box, Flex, Loader, Text } from "@mantine/core";

export default function LoadingUserProfile() {
    return (
        <Flex direction="column" className="space-y-2">
            <Flex direction="row">
                <Text className="text-xs">トップ </Text>
                <Text className="text-xs">/ ...</Text>
            </Flex>
            <Flex direction="row" className="space-x-4">
                <Box className="h-32 w-32 bg-gray-200 rounded-md" />
                <Flex direction="column" className="sapce-y-4">
                    <Loader color="gray" type="dots" />
                    <Loader color="gray" type="dots" />
                </Flex>
            </Flex>
        </Flex>
    );
}
