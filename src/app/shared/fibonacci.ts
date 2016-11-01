export class Fibonacci {
    public calculateFibonacciNumber(index: number): number {
        return this.calculate(index);
    }

    private calculate(i: number): number {
        return (i <= 2) ? 1 : this.calculate(i - 1 ) + this.calculate(i - 2);
    }
}
