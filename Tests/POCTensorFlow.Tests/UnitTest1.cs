using FluentAssertions;

namespace POCTensorFlow.Tests;

public class UnitTest1
{
    [Fact]
    public void Test1()
    {
        // Arrange
        const bool expected = true;

        // Act

        // Assert
        expected.Should().BeTrue();
    }
}
