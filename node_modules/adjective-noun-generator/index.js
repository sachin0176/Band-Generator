"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adjectives_1 = __importDefault(require("./words/adjectives"));
const nouns_1 = __importDefault(require("./words/nouns"));
function generateRandomName(options = {}) {
    if (options.separator === undefined)
        options.separator = ' ';
    if (options.caseStyle === undefined)
        options.caseStyle = 'capital';
    const adjective = adjectives_1.default[Math.floor(Math.random() * adjectives_1.default.length)];
    const noun = nouns_1.default[Math.floor(Math.random() * nouns_1.default.length)];
    if (options.caseStyle === 'lower')
        return `${adjective}${options.separator}${noun}`;
    if (options.caseStyle === 'upper')
        return `${adjective.toUpperCase()}${options.separator}${noun.toUpperCase()}`;
    if (options.caseStyle === 'sentence')
        return `${capitalize(adjective)}${options.separator}${noun}`;
    return `${capitalize(adjective)}${options.separator}${capitalize(noun)}`;
}
exports.default = generateRandomName;
function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxvRUFBNEM7QUFDNUMsMERBQWtDO0FBRWxDLFNBQXdCLGtCQUFrQixDQUFDLFVBQW1CLEVBQUU7SUFDOUQsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVM7UUFBRSxPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUM3RCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUztRQUFFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBRW5FLE1BQU0sU0FBUyxHQUFHLG9CQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsb0JBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzVFLE1BQU0sSUFBSSxHQUFHLGVBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUU3RCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssT0FBTztRQUFFLE9BQU8sR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUNwRixJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssT0FBTztRQUMvQixPQUFPLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7SUFDL0UsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLFVBQVU7UUFDbEMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDO0lBQy9ELE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMzRSxDQUFDO0FBYkQscUNBYUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxDQUFTO0lBQzNCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekMsQ0FBQyJ9